import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Lightbulb, Eye, Shuffle, ArrowRight, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { flashcards } from './data';

function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function App() {
  const [deck, setDeck] = useState(flashcards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showHint, setShowHint] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Voices logic
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const synth = window.speechSynthesis;

  useEffect(() => {
    const loadVoices = () => {
      const allVoices = synth.getVoices();
      // Try to find French-Canadian or at least French
      const frVoices = allVoices.filter(v => v.lang.startsWith('fr-CA') || v.lang.startsWith('fr'));
      setVoices(frVoices.length > 0 ? frVoices : allVoices);
    };

    loadVoices();
    if (speechSynthesis.onvoiceschanged !== undefined) {
      speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const handleShuffle = () => {
    setDeck(shuffleArray(flashcards));
    setCurrentIndex(0);
    setShowHint(false);
    setIsRevealed(false);
    synth.cancel();
    setIsPlaying(false);
  };

  useEffect(() => {
    // Initial shuffle on load
    handleShuffle();
  }, []);

  const playAudio = useCallback(() => {
    if (synth.speaking) {
      synth.cancel();
    }
    const currentCard = deck[currentIndex];
    if (!currentCard) return;

    const utterance = new SpeechSynthesisUtterance(currentCard.question);
    
    if (voices.length > 0) {
      // Prioritize fr-CA over fr-FR if available, otherwise just use whatever French voice we found
      const frCaVoice = voices.find(v => v.lang === 'fr-CA');
      const frVoice = voices.find(v => v.lang.startsWith('fr'));
      utterance.voice = frCaVoice || frVoice || voices[0];
    }
    
    // Slow down slightly for easier comprehension
    utterance.rate = 0.85;

    utterance.onstart = () => setIsPlaying(true);
    utterance.onend = () => setIsPlaying(false);
    utterance.onerror = () => setIsPlaying(false);

    synth.speak(utterance);
  }, [deck, currentIndex, voices, synth]);

  const handleNext = () => {
    synth.cancel();
    setIsPlaying(false);
    setShowHint(false);
    setIsRevealed(false);
    setCurrentIndex((prev) => (prev + 1) % deck.length);
  };

  const handlePrevious = () => {
    synth.cancel();
    setIsPlaying(false);
    setShowHint(false);
    setIsRevealed(false);
    setCurrentIndex((prev) => (prev - 1 + deck.length) % deck.length);
  };

  const currentCard = deck[currentIndex];

  if (!currentCard) return null;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col items-center justify-center p-6 sm:p-8 font-sans">
      <div className="w-full max-w-2xl mx-auto flex flex-col items-center gap-8">
        
        {/* Header */}
        <div className="text-center space-y-3 w-full">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
              Pratique Orale
            </h1>
            <button
              onClick={handleShuffle}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-50 text-indigo-700 hover:bg-indigo-100 rounded-full font-medium transition-colors text-sm"
            >
              <Shuffle className="w-4 h-4" />
              <span className="hidden sm:inline">Shuffle Cards</span>
            </button>
          </div>
          <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
            <div 
              className="h-full bg-indigo-600 transition-all duration-300 ease-in-out" 
              style={{ width: `${((currentIndex + 1) / deck.length) * 100}%` }}
            />
          </div>
          <p className="text-sm font-medium text-slate-500 text-left">
            Question {currentIndex + 1} of {deck.length}
          </p>
        </div>

        {/* Flashcard */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[3/2] perspective-[1000px]">
          <motion.div
            key={currentCard.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="w-full h-full absolute inset-0 bg-white rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col items-center justify-center p-8 sm:p-12 text-center"
          >
            {/* Primary Action: Listen */}
            <div className={`transition-all duration-500 flex flex-col items-center justify-center gap-6 ${isRevealed || showHint ? 'scale-90 opacity-40 absolute top-8' : 'scale-100'}`}>
              <button
                onClick={playAudio}
                className="w-24 h-24 sm:w-32 sm:h-32 bg-indigo-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-indigo-600/30 hover:scale-105 hover:bg-indigo-700 active:scale-95 transition-all focus:outline-none focus:ring-4 focus:ring-indigo-600/20"
                aria-label="Play spoken question"
              >
                {isPlaying ? <Volume2 className="w-12 h-12 sm:w-16 sm:h-16 animate-pulse" /> : <Volume2 className="w-12 h-12 sm:w-16 sm:h-16" />}
              </button>
              <p className="text-slate-500 font-medium tracking-wide uppercase text-sm sm:text-base">
                {isPlaying ? 'Écoutez...' : 'Écouter la question'}
              </p>
            </div>

            {/* Hint Section */}
            <AnimatePresence>
              {showHint && !isRevealed && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-32 max-w-md w-full bg-amber-50 p-6 rounded-2xl border border-amber-100/50"
                >
                  <div className="flex items-center justify-center gap-2 mb-3 text-amber-700">
                    <Lightbulb className="w-5 h-5 fill-amber-700/20" />
                    <span className="font-semibold text-sm uppercase tracking-wider">Indice / Hint</span>
                  </div>
                  <p className="text-slate-800 font-medium text-lg mb-2">{currentCard.question}</p>
                  <p className="text-slate-500 text-sm">{currentCard.hintText}</p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Answer Section */}
            <AnimatePresence>
              {isRevealed && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-28 w-full"
                >
                  <div className="inline-flex items-center justify-center gap-2 mb-6 px-4 py-1.5 bg-emerald-50 text-emerald-700 rounded-full font-semibold text-sm uppercase tracking-wider">
                    Réponse / Answer
                  </div>
                  <p className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-800 leading-tight">
                    {currentCard.answer}
                  </p>
                  <p className="mt-4 text-base sm:text-lg font-medium text-slate-500/80 italic">
                    {currentCard.answerEnglish}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="w-full flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4 w-full max-w-md mx-auto">
            <button
              disabled={showHint || isRevealed}
              onClick={() => setShowHint(true)}
              className="flex items-center justify-center gap-2 p-4 bg-white border border-slate-200 text-slate-700 rounded-2xl font-medium hover:bg-slate-50 hover:border-slate-300 transition-colors disabled:opacity-50 disabled:pointer-events-none"
            >
              <Lightbulb className="w-5 h-5" />
              Show Hint
            </button>
            <button
              disabled={isRevealed}
              onClick={() => {
                setShowHint(false);
                setIsRevealed(true);
              }}
              className="flex items-center justify-center gap-2 p-4 bg-slate-900 text-white rounded-2xl font-medium hover:bg-slate-800 shadow-xl shadow-slate-900/10 transition-colors disabled:opacity-50 disabled:pointer-events-none"
            >
              <Eye className="w-5 h-5" />
              Reveal Answer
            </button>
          </div>

          <div className="flex items-center justify-between w-full max-w-md mx-auto mt-4 px-2">
            <button
              onClick={handlePrevious}
              className="flex items-center justify-center w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
              aria-label="Previous question"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-slate-400 font-medium">Navigate</span>
            <button
              onClick={handleNext}
              className="flex items-center justify-center w-12 h-12 bg-white border border-slate-200 text-slate-600 rounded-full hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-sm"
              aria-label="Next question"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

import { useContext, useEffect, useState } from 'react';
import  { AttemptedContext } from '../context/attemptedContext';

/**
 * @description Custom hook to use the attempted context
 * @returns {AttemptedInterface} The attempted context
 */

export function useAttemptedContext() {
       
    const context = useContext(AttemptedContext); 

    if (context === null) {
        throw new Error('AttemptedProvider is missing');
    }

    return context;
}


/**
 * @description Custom hook to change theme
 */

export const useThemeDetector = () => {
    const getCurrentTheme = () => window.matchMedia("(prefers-color-scheme: dark)").matches;
    const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
    const mqListener = (e => {
        setIsDarkTheme(e.matches);
    });
    
    useEffect(() => {
      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addListener(mqListener);
      return () => darkThemeMq.removeListener(mqListener);
    }, []);
    return isDarkTheme;
}
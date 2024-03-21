import { useContext } from 'react';
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
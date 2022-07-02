import React from 'react';

interface IShowCompletedTodos {
    isCompletedListActive: boolean
    setCompletedListActive: (newValue: boolean) => void
}

export const ShowCompletedTodos: React.FC<IShowCompletedTodos> = ({ setCompletedListActive, isCompletedListActive }) => (
    <>
        <input
            onChange={() => setCompletedListActive(!isCompletedListActive)}
            type="checkbox"
            defaultValue={isCompletedListActive.toString()}
            id="completedListActive"
        />
        <label htmlFor="completedListActive">Show Done Tasks</label>
    </>
);
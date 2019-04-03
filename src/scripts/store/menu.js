import React from "react";

export const initialState = {
    dataState: "init",
    chapter: {
        name: "Prologue",
        description: "The road to the Gensokyo."
    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case "switch":
            return {
                dataState: ((state.dataState === "close" || state.dataState === "init") ? "open" : "close"),
                chapter: {
                    name: state.chapter.name,
                    description: state.chapter.description
                }
            }
        case "changeChapter":
            return {
                dataState: state.dataState,
                chapter: {
                    name: action.payload.name,
                    description: action.payload.description
                }
            }
        default:
            return state;
    }
};

export const Context = React.createContext()
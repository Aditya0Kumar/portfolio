"use client";

import { TypeAnimation } from "react-type-animation";

interface TerminalPromptProps {
    label: string;
    sequence?: any[];
    staticText?: string;
    className?: string;
}

export const TerminalPrompt = ({ label, sequence, staticText, className = "" }: TerminalPromptProps) => {
    return (
        <div className={`space-y-1 ${className}`}>
            <div className="flex items-center text-primary">
                <span className="text-secondary mr-2 font-bold">{">"}</span>
                <span className="text-foreground font-bold tracking-tight">{label}</span>
            </div>
            <div className="mt-1 ml-4 text-foreground/90 font-medium font-mono whitespace-pre-wrap">
                {staticText ? (
                    <div>{staticText}</div>
                ) : sequence ? (
                    <TypeAnimation
                        sequence={sequence}
                        wrapper="div"
                        cursor={false}
                        repeat={0}
                        style={{ display: 'block' }}
                        className="font-mono whitespace-pre-wrap"
                    />
                ) : null}
            </div>
        </div>
    );
};

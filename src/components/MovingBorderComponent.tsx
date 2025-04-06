"use client";
import { Button } from "@/components/ui/MovingBorder";
import React from "react";

export function MovingBorderComponent() {
    return (
        <div>
            <Button
                borderRadius="1.75rem"
                className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
            >
                Borders are cool
            </Button>
        </div>
    );
}

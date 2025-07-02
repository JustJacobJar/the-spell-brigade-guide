"use client"

import { Droppable } from '@hello-pangea/dnd';
import DataCard from './DataCard';
import { Tier } from '@/lib/types';

interface TierProps {
    tier: Tier
    // data: { spellName: string }[]    //List of card data
    className?: string
}

export default function TierRow({ tier,  className = '' }: TierProps) {
    return (
        <div className="flex">
            <div className={'w-32 py-8 text-center ' + className}>{ tier.tierName }</div>

            <Droppable droppableId={tier.tierId} direction="horizontal">
                {(provided) => (
                    <div
                        className="pl-4 flex flex-wrap items-center border w-full select-none"
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                    >
                        {tier.tierItems.map((item, index) => (
                            <DataCard
                                key={item.spellName}
                                id={item.spellName}
                                index={index}
                                spell={item}
                            />
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}
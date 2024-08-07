import React, { FC } from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type HomePageAccordanProps = {
    title: string,
    values: string[]
}
const HomePageAccordion: FC<HomePageAccordanProps> = ({ title, values }) => {
    return (
        <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
                <AccordionTrigger>{title}</AccordionTrigger>
                {values.map(ele => (<AccordionContent >
                    {ele}
                </AccordionContent>))}
            </AccordionItem>
        </Accordion>
    )
}

export default HomePageAccordion
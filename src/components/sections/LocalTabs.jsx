import React from 'react'
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";

import { Square } from 'lucide-react';
import squaredot from '@/assets/images/squaredot.png'
import localizetime from '@/assets/images/localizetime.png'
import localizationcost from '@/assets/images/localizationcost.png'
import Missingideal from '@/assets/images/Missingideal.png'
import viewercap from '@/assets/images/viewercap.png'
import viewscaptured from '@/assets/images/viewscaptured.png'
import languagesupport from '@/assets/images/languagesupport.png'
import libraryreport from '@/assets/images/libraryreport.png'
import RevenueafterWeek from '@/assets/images/RevenueafterWeek.png'

const LocalTabs = () => {
  return (
    <div className='bg-surface text-white py-8'>
      <div className='max-w-7xl mx-auto'>
        <Tabs defaultValue="delayed" className="w-full">
            <TabsList className="flex flex-col md:flex-row w-full md:inline-flex rounded-none bg-surface p-0 gap-2 md:gap-8">
                <TabsTrigger className='tab-title rounded-none uppercase bg-surface border-b-2
                    data-[state=active]:border-b-white data-[state=active]:bg-surface transition-all px-2 pb-4' value="delayed">
                    Delayed Localization
                </TabsTrigger>
                <TabsTrigger className='tab-title rounded-none uppercase bg-surface border-b-2
                    data-[state=active]:border-b-white transition-all data-[state=active]:bg-surface pb-4' value="manual">
                        Manual Subtitling
                </TabsTrigger>
                <TabsTrigger className='tab-title rounded-none uppercase bg-surface border-b-2
                    data-[state=active]:border-b-white transition-all data-[state=active]:bg-surface pb-4' value="unused">
                    Underutilized Content
                </TabsTrigger>
            </TabsList>
            <TabsContent className='pt-4 lg:pt-2' value="delayed">
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className='tabCard flex flex-col justify-between'>
                        <div className='p-5'>
                            <h3 className='text-center text-bold tex-h3'>Time to localize a 30-min show</h3>
                        </div>
                        <img src={localizetime} alt="localizetime" />
                        <div className='p-5 inline-flex justify-center border-t border-t-[#2B2B2B] gap-2'>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><Square size={14} fill='#424242' radius={1} stroke='#424242' /> without zapverse</h3>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><img width='12px' src={squaredot} alt="dot" /> with zapverse</h3>
                        </div>
                    </div>
                    <div className='tabCard flex flex-col justify-between'>
                        <div className='p-5'>
                            <h3 className='text-center text-bold tex-h3'>Per-minute localization cost</h3>
                        </div>
                        <img width='100%' src={localizationcost} alt="localizationcost" />
                        <div className='p-5 inline-flex justify-center border-t border-t-[#2B2B2B] gap-2'>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><Square size={14} fill='#424242' radius={1} stroke='#424242' /> without zapverse</h3>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><img width='12px' src={squaredot} alt="dot" /> with zapverse</h3>
                        </div>
                    </div>
                    <div className='tabCard flex flex-col justify-between'>
                       <div className='p-5'>
                            <h3 className='text-center text-bold tex-h3'>Viewer abandonment</h3>
                        </div>
                        <img src={viewercap} alt="viewercap" />
                        <div className='p-5 inline-flex justify-center border-t border-t-[#2B2B2B] gap-2'>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><Square size={14} fill='#424242' radius={1} stroke='#424242' /> without zapverse</h3>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><img width='12px' src={squaredot} alt="dot" /> with zapverse</h3>
                        </div>
                    </div>
                </div>
            </TabsContent>

            <TabsContent className='pt-4 lg:pt-2' value="manual">
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className='tabCard flex flex-col justify-between'>
                        <div className='p-5'>
                            <h3 className='text-center text-bold tex-h3'>Missing ideal release window</h3>
                        </div>
                        <img src={Missingideal} alt="Missing ideal" />
                        <div className='p-5 inline-flex justify-center border-t border-t-[#2B2B2B] gap-2'>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><Square size={14} fill='#424242' radius={1} stroke='#424242' /> without zapverse</h3>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><img width='12px' src={squaredot} alt="dot" /> with zapverse</h3>
                        </div>
                    </div>
                    <div className='tabCard flex flex-col justify-between'>
                        <div className='p-5'>
                            <h3 className='text-center text-bold tex-h3'>Views captured in first 24h</h3>
                        </div>
                        <img width='100%' src={viewscaptured} alt="viewscaptured" />
                        <div className='p-5 inline-flex justify-center border-t border-t-[#2B2B2B] gap-2'>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><Square size={14} fill='#424242' radius={1} stroke='#424242' /> without zapverse</h3>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><img width='12px' src={squaredot} alt="dot" /> with zapverse</h3>
                        </div>
                    </div>
                    <div className='tabCard flex flex-col justify-between'>
                       <div className='p-5'>
                            <h3 className='text-center text-bold tex-h3'>Supported languages</h3>
                        </div>
                        <img src={languagesupport} alt="languagesupport" />
                        <div className='p-5 inline-flex justify-center border-t border-t-[#2B2B2B] gap-2'>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><Square size={14} fill='#424242' radius={1} stroke='#424242' /> without zapverse</h3>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><img width='12px' src={squaredot} alt="dot" /> with zapverse</h3>
                        </div>
                    </div>
                </div>
            </TabsContent>

            <TabsContent className='pt-4 lg:pt-2' value="unused">
                <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className='tabCard flex flex-col justify-between'>
                        <div className='p-5'>
                            <h3 className='text-center text-bold tex-h3'>Percentage of library repurposed</h3>
                        </div>
                        <img src={libraryreport} alt="libraryreport" />
                        <div className='p-5 inline-flex justify-center border-t border-t-[#2B2B2B] gap-2'>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><Square size={14} fill='#424242' radius={1} stroke='#424242' /> without zapverse</h3>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><img width='12px' src={squaredot} alt="dot" /> with zapverse</h3>
                        </div>
                    </div>
                    <div className='tabCard flex flex-col justify-between'>
                        <div className='p-5'>
                            <h3 className='text-center text-bold tex-h3'>Revenue after Week 1</h3>
                        </div>
                        <img width='100%' src={viewscaptured} alt="viewscaptured" />
                        <div className='p-5 inline-flex justify-center border-t border-t-[#2B2B2B] gap-2'>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><Square size={14} fill='#424242' radius={1} stroke='#424242' /> without zapverse</h3>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><img width='12px' src={squaredot} alt="dot" /> with zapverse</h3>
                        </div>
                    </div>
                    <div className='tabCard flex flex-col justify-between'>
                       <div className='p-5'>
                            <h3 className='text-center text-bold tex-h3'>Supported languages</h3>
                        </div>
                        <img src={RevenueafterWeek} alt="RevenueafterWeek" />
                        <div className='p-5 inline-flex justify-center border-t border-t-[#2B2B2B] gap-2'>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><Square size={14} fill='#424242' radius={1} stroke='#424242' /> without zapverse</h3>
                            <h3 className='uppercase inline-flex items-center gap-1 text-xs'><img width='12px' src={squaredot} alt="dot" /> with zapverse</h3>
                        </div>
                    </div>
                </div>
            </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default LocalTabs

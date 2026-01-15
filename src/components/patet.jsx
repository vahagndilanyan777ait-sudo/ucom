import React from 'react'
import Patetcard from './patetcard'
import "./patet.css"

export default function patet() {
    
    let db = [
        {
            name:'Level up+ 3000',
            internet:"30 ԳԲ ինտերնետ",
            rope:"1500 րոպե",
            sms:"SMS 300",
            aliq:"35 հեռուստաալիք՝ Uplay հարթակում",
            gin:"3000 ֏",
        },
        {
            name:'Level up+ 4000',
            internet:"Անսահմանափակ ինտերնետ",
            rope:"700 րոպե",
            sms:"SMS 500",
            aliq:"35 հեռուստաալիք՝ Uplay հարթակում",
            gin:"4000 ֏",
        },
         {
            name:'Level up+ 5000',
            internet:"Անսահմանափակ ինտերնետ",
            rope:"3000 րոպե",
            sms:"SMS 1000",
            aliq:"35 հեռուստաալիք՝ Uplay հարթակում",
            gin:"5000 ֏",
        },
         {
            name:'Unity 12500',
            internet:"Անսահմանափակ ինտերնետ",
            rope:"3000 րոպե",
            sms:"SMS 1000",
            aliq:"200+ հեռուստաալիք՝ Uplay հարթակում",
            gin:"12500 ֏",
        },
    ]

  return (
    <div className='patet'>
        <h1>Լավագույն առաջարկ</h1>
        <div className='patetCards'>
            {db.map((el,i)=>{
                return <Patetcard name={el.name} aliq={el.aliq} internet={el.internet} gin={el.gin} sms={el.sms} rope={el.rope} />
            })}
        </div>
    </div>
  )
}

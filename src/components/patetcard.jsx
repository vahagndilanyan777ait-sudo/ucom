import React from 'react'

export default function patetcard({ name, internet, rope, sms, aliq, gin }) {
    return (
        <div className='patetCard'>
            <div className="anun">
                {name}
            </div>
            <div className="info">
                <p>
                    <i class="fa-solid fa-globe"></i>
                    {internet}
                </p>
                <p>
                    <i class="fa-solid fa-phone-volume"></i>
                    {rope}
                </p>
                <p>
                    <i class="fa-regular fa-comment-dots"></i>
                    {sms}
                </p>
                <p>
                    <i class="fa-solid fa-tv"></i>
                    {aliq}
                </p>

            </div>
            <div className="gumar">
                <p>
                    {gin}
                </p>
                <p>
                    Ավելին
                </p>
            </div>
            <button>Միանալ</button>
        </div>
    )
}

'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function FlippingImage() {
    const [flipped, setFlipped] = useState(false);

    return (
        <div
            className={`flip-container h-28 w-28 cursor-pointer ${flipped ? 'flipped' : ''}`}
            onClick={() => setFlipped(!flipped)}
        >
            <div className="flip-card-inner">
                <div className="flip-face overflow-hidden rounded-full border-2 border-primary p-1">
                    <Image
                        src="/me_logo.png"
                        alt="Dharmanshu Paghadar"
                        width={112}
                        height={112}
                        className="h-28 w-28 rounded-full object-cover"
                    />
                </div>

                {/* Back side */}
                <div className="flip-face flip-back overflow-hidden rounded-full border-2 border-primary p-1">
                    <Image
                        src="/me_log_2.jpeg"
                        alt="Flipped Image"
                        width={112}
                        height={112}
                        className="h-28 w-28 rounded-full object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

import React from 'react'

const PriceList = () => {
  return (
    <section className="w-full h-svh">
        <main className='w-full h-11/12'>
            <h2>PriceList</h2>
            <ul className='flex flex-col md:flex-row'>
                <li className='bg-accent w-full md:w-1/3 px-6 py-4'>
                    <h3 className="font-bold text-3xl">Basic</h3>
                    <p className="font-medium text-sm">Paket paling murah</p>
                    <ol className="font-light text-sm">
                        <li>Free domain</li>
                        <li>Free 24jam support</li>
                        <li>1x Revisi</li>
                    </ol>
                </li>
                <li className='bg-foreground text-background w-full md:w-1/3 px-6 py-4'>
                    <h3 className="font-bold text-3xl">Standard</h3>
                    <p className="font-medium text-sm">Paket paling banyak diambil</p>
                    <ol className="font-light text-sm">
                        <li>Free domain</li>
                        <li>Free 24jam support</li>
                        <li>2x Revisi</li>
                    </ol>
                </li>
                <li className='bg-accent w-full md:w-1/3 px-6 py-4'>
                    <h3 className="font-bold text-3xl">Premium</h3>
                    <p className="font-medium text-sm">Paket paling mahal</p>
                    <ol className="font-light text-sm">
                        <li>Free domain</li>
                        <li>Free 24jam support</li>
                        <li>3x Revisi</li>
                    </ol>
                </li>
            </ul>
        </main>
    </section>
  )
}

export default PriceList
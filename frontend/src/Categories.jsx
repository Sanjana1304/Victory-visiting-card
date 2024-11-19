import React from 'react'

const Categories = () => {
  return (
    <div className='mt-5 text-center text-white'>
        <div className='flex flex-col justify-center gap-3 space-x-4 mt-4'>
            <div className='bg-[#0096FF] p-2 rounded-lg ml-4'>
                <img src="cats/comp2.avif" alt="" />
                <p>Programming & Development</p>
            </div>
            <div className='bg-[#0096FF] p-2 rounded-lg'>
                <img src="cats/msoffice.jpg" alt="" />
                <p>Office Productivity Tools</p>
            </div>
            <div className='bg-[#0096FF] p-2 rounded-lg'>
                <img src="cats/accounts.jpg" alt="h" />
                <p>Business & Accounting Solutions</p>
            </div>

            <div className='bg-[#0096FF] p-2 rounded-lg'>
                <img src="cats/spokenlang.jpg" alt="h" />
                <p>Spoken Languages</p>
            </div>

            <div className='bg-[#0096FF] p-2 rounded-lg'>
                <img src="cats/design.avif" alt="h" />
                <p>Creative Design & Multimedia </p>
            </div>

            <div className='bg-[#0096FF] p-2 rounded-lg'>
                <img src="cats/tuition.jpg" alt="h" />
                <p>Tutions </p>
            </div>

            <div className='bg-[#0096FF] p-2 rounded-lg'>
                <img src="cats/summercamp.webp" alt="h" />
                <p>Summer Camp </p>
            </div>

        </div>
    </div>
  )
}

export default Categories
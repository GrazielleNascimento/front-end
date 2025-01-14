import { GithubLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-[#3CB371] text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>FlosNexu | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
            <a href="https://github.com/FlosNexu" target="_blank" ><GithubLogo size={48} /></a>
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer
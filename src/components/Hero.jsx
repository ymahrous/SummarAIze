import { logo } from '../assets';

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between items-center flex-row w-full mb-10 pt-3">
        <img src={logo} alt="logo" className='w-12 h-12 object-contain' />
        <button type='button' onClick={() => window.open('https://github.com/yousefnc/SummarAIze')} className='black_btn'>GitHub</button>
      </nav>
      <h1 className='head_text'>
        SummarAIze articles with
        <br className='max-md:hidden' />
        <span className='orange_gradient'>OpenAI Chat-GPT</span>
      </h1>
      <h2 className='desc'>an easy tool to encapsulate long stuff into clean stuff</h2>
    </header>
  )
}

export default Hero;
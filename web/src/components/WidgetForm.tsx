import { CloseButton } from './CloseButton';

import bugImageUrl from '../assets/bug.svg';
import ideaImageUrl from '../assets/idea.svg';
import thoughtImageUrl from '../assets/thought.svg';

const feedbackTypes = {
  BUG: {
    title: 'Problema',
    image: {
      source: bugImageUrl,
      alt: 'Ícone de minhoca roxa representando um bug'
    }
  },
  IDEA: {
    title: 'Ideia',
    image: {
      source: ideaImageUrl,
      alt: 'Ícone de uma lâmpada amarela'
    }
  },
  TITLE: {
    title: 'Outro',
    image: {
      source: thoughtImageUrl,
      alt: 'Ícone de nuvem azul para representar pensamento'
    }
  },
}

export function WidgetForm() {
  return (
  <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
   <header>
     <span className="text-xl leading-6">Deixe seu feedback</span>
     <CloseButton/>
   </header>
    {/* 35:00 */}
    <div className="flex py-8 gap-2 w-full">
    { Object.entries(feedbackTypes).map(([key, value]) => {
      return(
        <button
          key={key}
          className="bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:outline-none"
          type="button"
        >
          <img src={value.image.source} alt={value.image.alt}/>
          <span>{value.title}</span>
        </button>
      )

    })}
    </div>



   <footer className="text-xs text-neutral-400">
    Feito com 💜  por <a className="underline underline-offset-2" href="https://linkedin.com.br/vivianequeiroz">Viviane Queiroz</a>
   </footer>
  </div>)
}
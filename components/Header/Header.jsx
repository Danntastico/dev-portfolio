import Image from "next/image";

export default function Header() {
  return (
    <header>
      <section className='name-description'>
        <h1>
          Cheers! <br /> I&apos;m <span>Danilo Peña</span>
        </h1>
        <p>Based in Colombia, I'm a Frontend Developer and Multimedia Engineer. Passionate for learning and knowledge sharing. </p>
        <button>Contact me!</button>
      </section>
      <section className='profile-picture'>
        <Image alt='profile' src='/profile.png' fill></Image>
      </section>
    </header>
  )
}

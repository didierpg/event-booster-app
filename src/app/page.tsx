import Image from 'next/image'
import logo from '../assets/logo.svg'

export default function Home() {
  return (
    <main>
      <Image src={logo} alt="devstage" width={108.5} height={30} />
    </main>
  )
}

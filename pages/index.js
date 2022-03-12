import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Content from '../components/Content'
import Intro from '../components/Body/Intro'
import Feature from '../components/Body/Feature'
import Order from '../components/Body/Order'
import Menu from '../components/Body/Menu'
import Customer from '../components/Body/Customer'
import Test from '../components/Test/Test'
export default function Home() {
  return (
    // <Test />
    <Content>
      <Intro />
      <Feature />
      <Order />
      <Menu />
      {/* <Customer /> */}
    </Content>
  )
}

    
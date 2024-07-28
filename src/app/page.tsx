import { NextPage } from 'next'
import Card from './components/AchivementCard'
import HStack from './components/HStack';
import VStack from './components/VStack';
import ZStack from './components/ZStack';
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="relative h-screen overflow-hidden bg-fixed bg-center bg-[url('/images/pichan.JPG')] bg-custom bg-no-repeat">
      <div className="absolute inset-0 bg-white opacity-50"></div>
        <div className="relative z-10 h-full overflow-y-auto">
          <div className="container mx-auto px-4 py-8 text-black">
            <h1 className="text-4xl font-bold mb-4 flex justify-center">Shunpei Kido</h1>
            <p className="text-lg leading-relaxed mb-96 flex justify-center">
              木戸俊平のこれまでの実績や活動についてご紹介いたします。
            </p>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
              <Card
                title='大学(研究活動等)'
                description='兵庫県立大学における活動を紹介します。'
                imageUrl='/images/collage.png'
                textBackgroundColor='bg-blue-200'
                linkUrl='/collage'
              />
              <Card
                title='アルバイト(塾講師)'
                description='アルバイト先の塾でもITの力で改革をしました。'
                imageUrl='/images/teaching.JPG'
                textBackgroundColor='bg-blue-200'
                linkUrl='/teaching'
              />
              <Card
                title='インターンシップ(IT 開発)'
                description='IT企業でさまざまな開発経験を積んでいます。'
                imageUrl='/images/lab_desk.JPG'
                textBackgroundColor='bg-blue-200'
                linkUrl='/internship'
              />
              <Card
                title='その他の開発活動'
                description='個人開発や友人達との開発についてご紹介します。'
                imageUrl=''
                textBackgroundColor='bg-blue-200'
                linkUrl='/private_dev'
              />
            </div>
          </div>
          <div className="p-4">
        </div>
      </div>
    </div>
  )
}

export default Home

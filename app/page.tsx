import Image from "next/image";
import Card from '@/components/Card'

export default function Home() {
  return (
    < >
     <h1>I am nik</h1>
     <Card title="Card name" description="hey pls add card name"/>
     <Card title="Card number" description="hey pls add card number"/>
      <Card title="Card owner" description="hey pls add card owner name" />
    </>
  );
}

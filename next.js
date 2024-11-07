// pages/index.js
import Image from 'next/image';
import profilePic from '../public/images/profile.jpg';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Portfolio</h1>
      <Image src={profilePic} alt="Profile Picture" width={200} height={200} />
    </div>
  );
}

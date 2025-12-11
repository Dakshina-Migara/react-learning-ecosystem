import './Profile.css';

export default function Profile({color}) {
  return (
    <div className='headDiv' style={{ backgroundColor: color }}>

      <h1 className='head'>ACPT STUDENT PROFILE</h1>
      <h3 className='title'>BIO DATA</h3>
      <p className='names'>Name : Dakshina Migara</p>
      <p className='names'>Address : Pallama,Pannala</p>
      <p className='names'>Tel-No : 0760672610</p>
      <p className='names'>Email : dakshina@example.com</p>
      <h3 className='title'>DESCRIPTION</h3>
      <p className='names'>We get it. Writing your LinkedIn Profile summary isn’t at the top of your to-do list. You’re not sure what to write. Your photo and headline make your Profile complete enough. It’s not worth your time since you already have an impactful job that you enjoy. [Insert your own excuse here.]
        Well sometimes you need a great example — or 14 great examples — to see the summary’s magic and figure out how to write your own. Read on and prepare to be inspired.</p>

    </div>
  )
}
import {Bookmark} from 'lucide-react'
import Card from './components/Card'

const App = () => {
    const jobs = [
    {
      brandLogo: "https://pngimg.com/uploads/google/google_PNG19635.png",
      company: "Google",
      posted: "2 days ago",
      post: "Senior Frontend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$110/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/amazon/amazon_PNG27.png",
      company: "Amazon",
      posted: "5 days ago",
      post: "UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$95/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/microsoft/microsoft_PNG5.png",
      company: "Microsoft",
      posted: "1 week ago",
      post: "Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$80/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://pngimg.com/uploads/apple_logo/apple_logo_PNG19674.png",
      company: "Apple",
      posted: "3 days ago",
      post: "iOS Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$105/hr",
      location: "Cupertino, USA",
    },
    {
      brandLogo: "https://pngimg.com/uploads/meta/meta_PNG5.png",
      company: "Meta",
      posted: "10 days ago",
      post: "React Developer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Menlo Park, USA",
    },
    {
      brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/15844974/netflixlogo.0.0.1466448626.png?quality=90&strip=all&crop=1.2535702951444%2C0%2C97.492859409711%2C100&w=2400",
      company: "Netflix",
      posted: "2 weeks ago",
      post: "Backend Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$130/hr",
      location: "Los Gatos, USA",
    },
    {
      brandLogo: "https://platform.theverge.com/wp-content/uploads/sites/2/2025/02/openai-new-logo_f252fc.png?quality=90&strip=all&crop=7.8125%2C0%2C84.375%2C100&w=2400",
      company: "OpenAI",
      posted: "4 days ago",
      post: "Machine Learning Engineer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$150/hr",
      location: "San Francisco, USA",
    },
    {
      brandLogo: "https://logo-teka.com/wp-content/uploads/2025/08/airbnb-icon-logo.png",
      company: "Airbnb",
      posted: "3 weeks ago",
      post: "Product Designer",
      tag1: "Hybrid",
      tag2: "Mid Level",
      pay: "$90/hr",
      location: "San Francisco, USA",
    },
    {
      brandLogo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3r5Pp8196JW12Uxw4kiUZbcUEFFmoaJgQgNesHKkUCmbF9BlWturF2c0&s=10",
      company: "Uber",
      posted: "6 days ago",
      post: "Android Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$100/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/330px-Adobe_Acrobat_DC_logo_2020.svg.png",
      company: "Adobe",
      posted: "1 month ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$75/hr",
      location: "Noida, India",
    },
  ];

  console.log(jobs)
  return (
    <div className='parent'>
      {jobs.map(function (elem, idx){
        return <div key={idx}>
          <Card company={elem.company} location={elem.location} posted={elem.posted} post={elem.post} pay={elem.pay} brandLogo={elem.brandLogo} tag1={elem.tag1} tag2={elem.tag2} />
          </div>
      })}
    </div>
  )
}

export default App

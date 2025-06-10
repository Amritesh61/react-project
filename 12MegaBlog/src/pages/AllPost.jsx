import React  , {useState , useEffect, use} from 'react'
import appwriteService from '../appwrite/config'
import { Container , PostCard } from '../components'
import { set } from 'react-hook-form'

function AllPost() {
    const [posts, setPosts] = useState([])
    useEffect(() => {},[])
    appwriteService.getPosts([]).then((posts) =>{
        if(posts){
            setPosts(posts.documents)
        }
    } )
  return  (
    <div className='w-full py-8'>AllPost</div>
  )
}

export default AllPost
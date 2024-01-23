import React from 'react'
import service from "../appwrite/configAuth"
import { useState } from 'react'
import { useEffect } from 'react'
import Container from '../components/container/Container'
import PostCard from "../components/PostCard"


function AllPosts() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    service.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])
  //TODO: add case for array length 0
  return (
    <div className='w-full py-8'>
      <Container>
        <div className="flex flex-wrap">
          {posts.length > 0 ? (
            posts.map((post) => (
              <div className="p-2 w-1/4" key={post.$id}>
                <PostCard {...post} />
              </div>
            ))
          ) : (
            <div className="p-2 w-1/4">
              <h1 className="text-center text-gray-500">No posts found</h1>
            </div>
          )}
        </div>
      </Container>
    </div>
  )
}

export default AllPosts
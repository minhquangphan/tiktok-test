import { useEffect, useState, usrState } from 'react'


// 1. useEffect(callback)
    // - gọi callback mỗi khi component re-render
    // - gọi callback sau khi component thêm element vào DOM
// 2. useEffect(callback, [])
    // - chỉ gọi callback 1 lần sau khi component muonted
// 3. useEffect(callback, [deps])

// -------------------------
//  1. Callback luôn được gọi sau khi component mounted

function Content() {
    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState([])

    useEffect(() => {
        // console.log('Re-render', title)
        // document.title = title
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => {
                setPosts(posts)
            })
    }, [])

    return (
        <div style={{ padding: 32 }}>
            <input
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>  
        </div>
    );
}

export default Content;
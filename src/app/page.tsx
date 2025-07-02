'use client'
import service from "@/Api/service/ServiceApi";
import Modal from "@/Components/Modal/Modal";
import Post from "@/Components/Posts/Post";
import { Authcontext } from "@/Context/AuthContext";
import { useContext, useEffect, useState } from "react";

export default function Home() {

  let context = useContext(Authcontext)

  let [title, setTitle] = useState('')
  let [body, setBody] = useState('')
  let [id, setId] = useState(0)
  let [userId, setUserId] = useState(0)

  useEffect(() => {
    service.getAllPost().then((response) => {
      context.setDataApi(response.data)
    })
  }, [])

  function handleBody(e: any) {
    setBody(e.target.value)
  }

  function handleTitle(e: any) {
    setTitle(e.target.value)
  }

  function closeModal() {
    context.setUpdateModal(false)
    setBody('')
    setTitle('')
    setId(0)
  }

  function createPost() {
    context.setUpdateModal(true)
    console.log(context.dataApi.length + 1)
  }

  function createData(e: any) {
    e.preventDefault()
    let newId = context.dataApi[context.dataApi.length - 1].id + 1
    let newUserId = context.dataApi[context.dataApi.length - 1].userId + 1
    let post = {
      userId: newUserId,
      id: newId,
      title: title,
      body: body,
    }
    context.setDataApi([...context.dataApi, post]);
    console.log(post)
    context.setUpdateModal(false)
  }

  function deleteData(id: number) {
    console.log(id)
    const updatedData = context.dataApi.filter((item: any) => item.id !== id);
    context.setDataApi(updatedData)
  }

  function updateData(e: any) {
    e.preventDefault();
    console.log(typeof (context.dataApi))
    const updateData = context.dataApi.map((item: any) => {
      if (item.id === id) {
        return {
          ...item,
          title: title,
          body: body,
        };
      }
      return item
    })
    context.setDataApi(updateData)
    context.setUpdateModal(false)
    eraseObj()
  }

  function eraseObj(){
    setBody('')
    setId(0)
    setTitle('')
    setUserId(0)
  }

  return (
    <div>
      {context.updateModal && (
        <Modal body={body} title={title} handleBody={handleBody} handleTitle={handleTitle} handleUpdate={updateData} handleModal={closeModal} handleCreate={createData} id={id}/>
      )}
      <h2>Posts and Posts</h2>
      <button onClick={createPost}>Criar Post</button>
      {context.dataApi.map((item: any) => (
        <Post key={item.id} body={item.body} title={item.title} id={item.id} setTitle={setTitle} setBody={setBody} setId={setId} handleDelete={deleteData} />
      ))}
    </div>
  );
}
'use client'
import service from "@/Api/service/ServiceApi";
import control from "@/Components/Controllers/PostControl";
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

  let [comment, setComment] = useState('')
  let [commentIndex, setCommentIndex] = useState(0)

  useEffect(() => {
    service.getAllPost()
      .then((response) => {
        const postsWithComments = response.data.map((post: any) => ({
          ...post,
          comments: []
        }));
        context.setDataApi(postsWithComments);
      })
      .catch((error) => {
        console.error('Erro ao buscar posts:', error);
      });
  }, []);


  function handleBody(e: any) {
    setBody(e.target.value)
  }

  function handleTitle(e: any) {
    setTitle(e.target.value)
  }

  function closeModal() {
    context.setUpdateModal(false)
    context.setUpdateComment(false)
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
    control.createDataApi(title, body, context)
    context.setUpdateModal(false)
  }

  function deleteData(id: number) {
    control.deleteDataApi(id, context)
  }

  function updateData(e: any) {
    e.preventDefault();
    control.updateDataApi(id, title, body, context)
    context.setUpdateModal(false)
    eraseObj()
  }

  function eraseObj() {
    setBody('')
    setId(0)
    setTitle('')
    setUserId(0)
  }

  function handleComment(e:any){
    setComment(e.target.value)
  }

  function submitComment(e:any){
    e.preventDefault()
    control.createComent(id, comment, context)
  }

  function handleDeleteComment(){
    control.deleteComment(id, commentIndex, context)
  }

  function handleUpdateComment(e:any){
    e.preventDefault()
    control.updateComment(id, commentIndex, comment, context)
    context.setUpdateModal(false)
    context.setUpdateComment(false)

  }

  return (

    <div className="bg-white flex flex-col">

      {context.updateModal && (
        <Modal body={body} title={title} handleBody={handleBody} handleTitle={handleTitle} handleUpdate={updateData} handleModal={closeModal} handleCreate={createData} id={id}comment={comment} handleComment={handleComment} handleUpdateComment={handleUpdateComment} indexComment={commentIndex}/>
      )}

      <h2 className="bg-blue-500 p-4 shadow-xl/30 rounded-sm m-auto text-center mt-10 text-5xl text-white hover:cursor-pointer transform hover:scale-75 transition duration-300">Social Tips</h2>

      <div className="flex content-end justify-end p-7">
        <button className="p-3 rounded-2xl bg-green-500 text-white hover:cursor-pointer transition duration-300 ease-in-out hover:bg-white  hover:text-black " onClick={createPost}>Criar Novo Post</button>
      </div>

      {context.dataApi.map((item: any) => (
        <div key={item.id} className="flex justify-center flex-col items-center">
          <Post key={item.id} body={item.body} title={item.title} id={item.id} setTitle={setTitle} setBody={setBody} setId={setId} handleDelete={deleteData} handleComment={handleComment} handleSubmitComment={submitComment} comments={item.comments} setCommentIndex={setCommentIndex} handleDeleteComment={handleDeleteComment} setComment={setComment}/>
        </div>
      ))}
    </div>
  );
}
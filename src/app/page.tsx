'use client'
import service from "@/Api/service/ServiceApi";
import Modal from "@/Components/Modal/Modal";
import Post from "@/Components/Posts/Post";
import { Authcontext } from "@/Context/AuthContext";
import { useContext, useEffect, useState } from "react";

export default function Home() {

  let context = useContext(Authcontext)

  useEffect(() => {
    service.getAllPost().then((response) => {
      context.setDataApi(response.data)
    })
  }, [])

  return (
    <div>
      <Modal/>
      <h2>Posts and Posts</h2>
      {context.dataApi.map((item: any) => (
        <Post body={item.body} title={item.title} id={item.id} />
      ))}
    </div>
  );
}
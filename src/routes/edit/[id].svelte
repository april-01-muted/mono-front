<script lang="ts" context="module">
  import * as conect from '$lib/conect.js';
  import type { LoadEvent } from '@sveltejs/kit';

  export async function load({ params }:LoadEvent) {
    const res = await conect.getById(params.id);
    console.log(res);
    return {
      props: {
        obj: res[0]
       }
     }
   }
</script>

<script lang="ts">
  export let obj:MyObj;

  interface MyObj {
    id:string;
    name:string;
  }

  async function insert(){
    const res = await conect.insert(obj);
  }

  async function update(){
    const res = await conect.update(obj);
  }

  async function del(){
    const res = await conect.del(obj);
  }

</script>

<p>ユーザーID：<input type="text" name="id" bind:value={obj.id}><br>
  ユーザー名：<input type="text" name="id" bind:value={obj.name}></p>
<button on:click={insert}>登録</button><br>
<button on:click={update}>更新</button><br>
<button on:click={del}>削除</button><br>

<a href="/">Home</a>
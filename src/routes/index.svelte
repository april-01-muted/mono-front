<script lang="ts" context="module">
  import * as conect from '$lib/conect.js';
</script>

<script lang="ts">

  let serchData:MyObj[] = [];

  let serchId: string = "";
  let serchName: string = "";

  interface MyObj {
    id:string;
    name:string;
  }

  async function serch_Id() {
     serchData = await conect.getById(serchId);
  }
 
  async function serch_Name() {
     serchData = await conect.getByName(serchName);
  }
</script>


<div class="conditions">
【検索条件】<br>
ユーザーID：<input type="text" name="id" bind:value={serchId}><button on:click={serch_Id}>検索</button><br>
ユーザー名：<input type="text" name="name" bind:value={serchName}><button on:click={serch_Name}>検索</button><br>
</div>

<div class="result">
【検索結果】
<p>検索結果{serchData.length}件</p>
	{#if serchData.length > 0}
            <ul>
	    {#each serchData as data}
            <li>{data.id} : <a href="/edit/{data.id}">{data.name}</a></li>
	    {/each}					
            </ul>
	{:else}
	    <p>検索結果なし</p>
	{/if}
</div>

<style>
.conditions{
  margin: 20px;
}
.result{
  margin: 20px;
}
</style>
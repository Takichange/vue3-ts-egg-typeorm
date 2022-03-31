<script setup lang="ts">
import {ref}from 'vue'
// import { a} from './hello'

let result = await fetch("http://localhost:3000/api/get_user", {
  "method": "POST",
})
let res = await result.json()
console.log(res);
// console.log(AA.a);



type ArrayType1 = Array<{a:number,b:number}>
type ArrayType2 = ({a:number,b:number} | {c:string,d:number})[]
type GetArrayOrTupleItemType1 = ArrayType1[number]
type GetArrayOrTupleItemType2 = ArrayType2 extends Array<infer U> ?U:never
//--------------
/*
获取接口inteface中的类型
*/
interface A{
  b:string,
  c:number,
  d:Array<{e:symbol}>
}
type B = A['b']
type C = A['c']
type E = A['d'][number]['e']


// 真实场景可能更为复杂
;(window as unknown as { handler: (() => void) | null }).handler = null

let a:undefined | {b:string} = undefined
function c(){
  a = {
    b:'1'
  }
}
c()
// console.log(a.b);
console.log(a!.b);




</script>
<template>
  <div>
    
  </div>
</template>
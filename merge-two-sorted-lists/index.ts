/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  let list = new ListNode()
  let newList = list

  while (list1 && list2) {
      if (list1.val <= list2.val) {
          newList.next = list1
          list1 = list1.next
      } else {
          newList.next = list2
          list2 = list2.next
      }
      newList = newList.next
  }

  newList.next = list1 || list2
  return list.next;
};

class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

function main(){

  let list1 = new ListNode(1, new ListNode(2, new ListNode(4)))
  let list2 = new ListNode(1, new ListNode(3, new ListNode(4)))
  let output:number[] = []
  let result; 
  result = mergeTwoLists(list1, list2)
  
  while (result?.next !== undefined) {
    if (isNaN(result.val)) {
      result = result.next
    }
    output.push(result.val)
    result = result.next
  }
  console.log(output) //[1,1,2,3,4,4]


  list1 = new ListNode(NaN, null)
  list2 = new ListNode(NaN, null)
  output = []
  result = mergeTwoLists(list1, list2)
  
  while (result?.next !== undefined) {
    if (isNaN(result.val)) {
      result = result.next
      continue
    }
    output.push(result.val)
    result = result.next
  }
  console.log(output)//[]

  list1 = new ListNode(NaN)
  list2 = new ListNode(0)
  output = []
  result = mergeTwoLists(list1, list2)
  while (result?.next !== undefined) {
    if (isNaN(result.val)) {
      result = result.next
      continue
    }
    output.push(result.val)
    result = result.next
  }
  console.log(output) //[0]

}

main()
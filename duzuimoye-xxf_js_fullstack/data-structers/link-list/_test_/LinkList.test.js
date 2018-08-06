import LinkedList from '../LinkList';
import { link } from 'fs';

describe('LinkList', () =>{
  //it(...)函数定义了一个测试用例
  it('should create empty linked list',() =>{
    const linkedList = new LinkedList();
    expect(linkedList.toString()).toBe('');
  });
  it('should append node to Linked list', ()=>{
    const linkedList = new LinkedList();

    expect(linkedList.head).toBeNull();
    expect(linkedList.tail).toBeNull();

    // linkedList.append(1);
    // linkedList.append(2);
    // 链式调用
    linkedList.append(1).append(2).append(3)

    expect(linkedList.toString()).toBe('1,2,3');
  });
    it ('should prepend node to linked list', () =>{
      const linkedList = new LinkedList();
      linkedList.append(1).append(3);
      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('3');
      linkedList.prepend(2);
      expect(linkedList.toString()).toBe('2,1,3');
    });
    it('should prepend node to linked list',()=>{

    })
    it('should delete node by value fromlinked list',()=>{
      const linkedList = new LinkedList();
      expect(linkedList.delete(5)).toBeNull();
      linkedList.append(1);
      linkedList.append(1);
      linkedList.append(2);
      linkedList.append(3);
      linkedList.append(3);
      linkedList.append(3);
      linkedList.append(4);
      linkedList.append(5);

      expect(linkedList.head.toString()).toBe('1');
      expect(linkedList.tail.toString()).toBe('5');

      const deleteNode = linkedList.delete(3);
      expect(deleteNode.value).toBe(3);
      expect(linkedList.toString()).toBe('1,1,2,4,5');
    });
    it ('should find node by value',()=>{
      const linkedList = new LinkedList();
      expect(linkedList.find({value: 5})).toBeNull();
      linkedList.append(1).append(2).append(3)

      const node = linkedList.find({value:2});
      expect(node.value).toBe(2)
    }) 
})
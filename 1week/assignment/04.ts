/**
 * 아래의 클래스를 유연하게 만들어주세요.
 * - any 타입을 제거해주세요.
 * - items의 원소를 제거하는 remove 메서드를 만들어주세요.
 * - 특정 index의 원소를 변경하는 update 메서드를 만들어주세요.
 */

class List<T> {
  private items: T[] = [];

  add(item: T) {
    this.items.push(item);
  }

  get(index: number) {
    return this.items[index];
  }

  remove(item: T) {
    const targetIndex = this.items.indexOf(item);
    this.items.splice(targetIndex, 1);
  }

  update(index: number, item: T) {
    this.items[index] = item;
  }
}

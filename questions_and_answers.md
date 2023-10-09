<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b> {} </b></summary>
<p> 

#### Answer: ?

<i> We have consoled (greetign), and inside this variable, there is an Empty Object, so 'A' is correct.</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b> "12" </b></summary>
<p>

#### Answer: ?

<i> Because we have added a string with a number, and we know that usually when we add a string with a number, the result is converted to a string.</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b> `['🍕', '🍫', '🥑', '🍔']` </b></summary>
<p>

#### Answer: ?

<i> The reason 'A' is the correct answer is that we have consoled 'food', and in that case, the (food array) has not been changed or reassigned in any way by the another code, so its value remains the same as before."</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b> `Hi there, undefined` </b></summary>
<p>

#### Answer: ?

<i>The reason 'B' is the correct answer is that we have not passed any argument to the (sayHi) function, which is why the (name) parameter inside the function has a value of 'undefined'. As a result, the output obtained is 'Hi there, undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b> 3 </b></summary>
<p>

#### Answer: ?

<i>The reason there are 3 answers here is that during the first iteration of the loop, '0' is falsy, so the 'count' value remains at 0. However, in the subsequent iterations where truthy values are encountered, the condition is satisfied, leading to 'count' being incremented by 1 with each iteration. As a result, the final result is 3</i>

</p>
</details>

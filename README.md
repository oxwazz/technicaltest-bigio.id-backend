# Technical Test - BIGIO.id - Backend 😸

## 1) Soal 13 - Palindrome ✅

Example Test Case
```
- Test Case 1 -

Input:
phobia

Output:
phobiaibohp

- Test Case 2 -

Input:
Halim

Output:
HalimilaH

```
Answer with JavaScript
```
const palindrome = () => {
  let word = ''
  let palindrome = ''

  while (true) {
    const input = prompt("Masukkan Nilai:")

    if (input == -1) {
      break
    }

    word += input

    if (word.length > 1) {
      for (let i = word.length-2; i >= 0; i--) {
        palindrome += word[i]
      }
    }

    console.log('Output: ' + word + palindrome)
    palindrome = ''
  }
}

palindrome()
```
link: https://repl.it/@oxwazz/Soal13-Palindrome

## 2) Soal 14 - Hourglass ✅
link: https://repl.it/@oxwazz/Soal14-hourglass

## 3) Soal 15 - Butterfly ✅
link: https://repl.it/@oxwazz/Soal15-butterfly

## 4) Soal 16 - Rancangan Basis Data - Aplikasi Point Of Sales (POS) ✅
<img src="4 - Soal 16 - Rancangan Basis Data - Aplikasi POS/Rancangan Basis Data - Aplikasi POS.svg" width="600">

## 5) Soal 17 - Aplikasi Web Survey Harga ✅

### Stack Tech :gear:

<h4>Back-end</h4>
- RESTful API Using Express.js and PostgreSQL

<h4>Front-end</h4>
- Bootstrap
- Vue.js, Axios, VueRouter

### Entity Relationship Diagram (ERD) :triangular_ruler:
<img src="/5 - Soal 17 - Aplikasi Web Survey Harga/0 other/ERD - Aplikasi Web Survey Harga.svg" width="700">

### Endpoint :mailbox_with_mail:
<h4>Komoditas Endpoint</h4>

* `GET /komoditas?accept` - Read All Komoditas
* `POST /komoditas` - Create Komoditas
* `PUT /komoditas/:id` - Update Komoditas
* `DELETE /komoditas:id` - Delete Komoditas

<h4>User Endpoint</h4>

* `POST /login` - Login User

### Screenshot :camera:

Some Example Api test with Postman



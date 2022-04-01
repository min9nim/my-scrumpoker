# my-scrumpoker

## Problem
AP팀에서는 플래닝시에 0.1, 0.25, 0.5, 1, 2, ... 와 같은 스토리포인트를 사용하고 있다. 하지만, 스크럼포커온라인 에서는 ?, 0, 0.5, 1, 2, .. 의 점수만 옵션으로 제공하고 있기 때문에, 유권자들이 0.1 과 0.25 로 투표를 하고 싶을 경우 어쩔 수 없이 각각  ? 와 0 로 투표를 해야만 하는 불편함이 있었다.

## Solution
스크럼포커 온라인 화면에서 자바스크립트 콘솔을 열고 아래 스크립트를 실행시키면, 자동으로 ? 와 0 값을 각각 0.1 과 0.25로 변경하여 주므로 플래닝 회의시 헤깔리지 않고 투표할 수 있다.

```js
setInterval(() => {
    document.querySelectorAll('table.mat-table div').forEach(item => {
        if (item.innerHTML === ' 0 ') {
            item.innerHTML = '0.25'
        }

        if (item.innerHTML === ' ? ') {
            item.innerHTML = '0.1'
        }
    })

    document.querySelectorAll('div.flex-container div').forEach(item => {
        if (item.innerHTML === '0') {
            item.innerHTML = '0.25'
        }
        if (item.innerHTML === '?') {
            item.innerHTML = '0.1'
        }
    })
}, 500)
``` 

## Chrome extension
스크럼포커 사이트 방문시마다 위 스크립트를 매번 수행하는 것은 귀찮다면 아래와 같이 크롬익스텐션을 활용할 수 있다.

![https://github.com/min9nim/my-scrumpoker/issues/2](https://github.com/min9nim/my-scrumpoker/issues/2)




import React from 'react'

function MemoComp({name}) {
  return (
    <div>Memo_13
        {name}
    </div>
  )
}

export default React.memo(MemoComp);
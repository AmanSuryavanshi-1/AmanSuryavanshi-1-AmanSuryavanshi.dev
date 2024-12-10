import { Any } from 'next-sanity';
import React from 'react';

function StudioNavbar (props: Any) {
  return (
    <div>
      {/* <Link href="/">Go to website</Link> */}
      <div className='mt-[9vh] py-16'>{props.renderDefault(props)}</div>
    </div>
  )
}

export default StudioNavbar;

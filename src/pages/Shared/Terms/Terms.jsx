import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
    return (
        <div>
            <h3>Terms and conditions</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia earum quos cum voluptatibus ullam animi veritatis deleniti veniam odio ipsam, delectus quaerat consequatur vel qui itaque excepturi aliquam soluta expedita minus, aut, dolorum voluptatem vitae nostrum officiis. Vero atque omnis deserunt laboriosam adipisci repudiandae, exercitationem repellat fugiat aliquam sequi suscipit.</p>
            <p> Go back to <Link to='/register'>Register</Link></p>
        </div>
    );
};

export default Terms;
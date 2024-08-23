import './ItemDetail.css'; 
import HoverRating from '../Rating/Rating';
import { ItemQuantifySelector } from '../ItemQuantifySelector/ItemQuantifySelector';
import { AddItemButton } from '../AddItemButton/AddItemButton';

export const ItemDetail = () =>(
    <>
    <section className="layoutContainer">
          <div>
            <img className='imgContainer' src="https://samsungar.vtexassets.com/arquivos/ids/193728-800-auto?width=800&height=auto&aspect=true" alt="" />
            </div>
          <div class="grow1">
            <h3>Title</h3>
            <div>
            <HoverRating />
            </div>
            <span className='SpanInfo'>Description</span>
            <span className='SpanInfo'>Price: </span>
            <div>
              <ItemQuantifySelector/>
            </div>
            <div className='center'>
            <AddItemButton />
            </div>
          </div>
        </section>
    </>
);
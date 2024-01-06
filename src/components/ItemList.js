import { CDN_URL } from '../utils/constants';

const ItemList = ({ items }) => {
  console.log('mathe... idar see');
  console.log(items);
  return (
    <div>
      <div>
        {items.map((item) => (
          <div
            key={item.card.info.id}
            className='p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between'
          >
            <div className='w-8/12'>
              <div className='py-2'>
                <span>{item.card.info.name}</span>
                <span> - ₹{item.card.info.price / 100}</span>
              </div>
              <p className='text-xs'>{item.card.info.description}</p>
            </div>
            <div className='w-4/12 p-4'><img src={CDN_URL + item.card.info.imageId} className='w-full'/></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;

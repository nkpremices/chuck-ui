import { Store } from '../../store/initialState';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import { setSelectedCategory } from '../../store/actions/creators/categories';
import { JokeDetails } from './JokeDetails';
import { JokeDetailsModalButtonContainerStyled } from './StyledJokes';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    minHeight: '350px',
  },
};

const JokeDetailsModal = () => {
  const categoriesStore = useSelector((store: Store) => store.categories);

  const dispatch = useDispatch();

  function closeModal() {
    dispatch(setSelectedCategory(null, false));
  }

  if (!categoriesStore.isCategorySelected || !categoriesStore.currentCategory) {
    return <></>;
  }

  console.log(categoriesStore);

  return (
    <Modal
      isOpen={categoriesStore.isCategorySelected}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={customStyles}
    >
      <JokeDetailsModalButtonContainerStyled>
        <button onClick={closeModal}>x</button>
      </JokeDetailsModalButtonContainerStyled>
      {categoriesStore.currentCategory && (
        <JokeDetails category={categoriesStore.currentCategory} />
      )}
    </Modal>
  );
};

export default JokeDetailsModal;

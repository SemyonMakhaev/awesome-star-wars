import React from 'react';
import { useParams } from 'react-router-dom';
import { BackLink } from 'src/components/BackLink';
import { useCharacter } from 'src/hooks/useCharacter';
import { ErrorMessage } from 'src/components/ErrorMessage';
import { Loader } from 'src/components/Loader';
import { EditCharacterForm } from './components/Form';
import { routes } from 'src/routes';

export function EditCharacterPage() {
  const { id } = useParams();

  const { character, isFetching } = useCharacter(id ?? '');

  if (isFetching) {
    return <Loader />;
  }

  if (!character || !id) {
    return <ErrorMessage>Character not found</ErrorMessage>;
  }

  return (
    <>
      <BackLink to={routes.character(id)}>Back to hero</BackLink>
      <EditCharacterForm character={character} />
    </>
  );
}

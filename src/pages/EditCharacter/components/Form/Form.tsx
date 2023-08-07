import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import { useAppDispatch } from 'src/hooks/redux';
import { peopleActions } from 'src/store/slices/people/actions';
import { Character, EyeColor, Gender, HairColor, SkinColor } from 'src/types/character';
import { routes } from 'src/routes';

interface EditCharacterFormProps {
  readonly character: Character;
}

export function EditCharacterForm({ character }: EditCharacterFormProps) {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const formik = useFormik<Character>({
    initialValues: {
      ...character,
    },
    onSubmit(values) {
      dispatch(peopleActions.patchCharacter(values));

      navigate(routes.character(character.id));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Stack spacing={2}>
        <TextField
          fullWidth
          id="name"
          name="name"
          label="Name"
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={formik.touched.name && formik.errors.name}
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        <FormControl>
          <InputLabel id="gender-label">Gender</InputLabel>
          <Select
            id="gender"
            labelId="gender-label"
            name="gender"
            label="Gender"
            error={formik.touched.gender && Boolean(formik.errors.gender)}
            value={formik.values.gender}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value={Gender.Female}>Female</MenuItem>
            <MenuItem value={Gender.Male}>Male</MenuItem>
            <MenuItem value={Gender.Hermaphrodite}>Hermaphrodite</MenuItem>
            <MenuItem value={Gender.NotAvailable}>Not available</MenuItem>
            <MenuItem value={Gender.None}>None</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <Typography gutterBottom sx={{ mb: 0 }}>Height</Typography>
          <Slider
            id="height"
            name="height"
            min={60}
            max={300}
            valueLabelDisplay="auto"
            value={formik.values.height}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormControl>
        <FormControl>
          <Typography gutterBottom sx={{ mb: 0 }}>Mass</Typography>
          <Slider
            id="mass"
            name="mass"
            min={5}
            max={150}
            valueLabelDisplay="auto"
            value={formik.values.mass}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </FormControl>
        <FormControl>
          <InputLabel id="hair-color-label">Hair color</InputLabel>
          <Select
            multiple
            id="hair-color"
            labelId="hair-color-label"
            name="hairColor"
            label="Hair color"
            error={formik.touched.hairColor && Boolean(formik.errors.hairColor)}
            value={formik.values.hairColor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value={HairColor.Auburn}>Auburn</MenuItem>
            <MenuItem value={HairColor.Balck}>Black</MenuItem>
            <MenuItem value={HairColor.Blond}>Blond</MenuItem>
            <MenuItem value={HairColor.Blonde}>Blonde</MenuItem>
            <MenuItem value={HairColor.Brown}>Brown</MenuItem>
            <MenuItem value={HairColor.Grey}>Grey</MenuItem>
            <MenuItem value={HairColor.White}>White</MenuItem>
            <MenuItem value={HairColor.None}>None</MenuItem>
            <MenuItem value={HairColor.NotAvailable}>Not available</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="eye-color-label">Eye color</InputLabel>
          <Select
            multiple
            id="eye-color"
            labelId="eye-color-label"
            name="eyeColor"
            label="Eye color"
            error={formik.touched.eyeColor && Boolean(formik.errors.eyeColor)}
            value={formik.values.eyeColor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value={EyeColor.Black}>Black</MenuItem>
            <MenuItem value={EyeColor.Blue}>Blue</MenuItem>
            <MenuItem value={EyeColor.BlueGray}>Blue gray</MenuItem>
            <MenuItem value={EyeColor.Brown}>Brown</MenuItem>
            <MenuItem value={EyeColor.Gold}>Gold</MenuItem>
            <MenuItem value={EyeColor.Green}>Green</MenuItem>
            <MenuItem value={EyeColor.Hazel}>Hazel</MenuItem>
            <MenuItem value={EyeColor.Orange}>Orange</MenuItem>
            <MenuItem value={EyeColor.Pink}>Pink</MenuItem>
            <MenuItem value={EyeColor.Red}>Red</MenuItem>
            <MenuItem value={EyeColor.White}>White</MenuItem>
            <MenuItem value={EyeColor.Yellow}>Yellow</MenuItem>
            <MenuItem value={EyeColor.Unknown}>Unknown</MenuItem>
          </Select>
        </FormControl>
        <FormControl>
          <InputLabel id="skin-color-label">Skin color</InputLabel>
          <Select
            multiple
            id="skin-color"
            labelId="skin-color-label"
            name="skinColor"
            label="Skin color"
            error={formik.touched.skinColor && Boolean(formik.errors.skinColor)}
            value={formik.values.skinColor}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value={SkinColor.Blue}>Blue</MenuItem>
            <MenuItem value={SkinColor.Brown}>Brown</MenuItem>
            <MenuItem value={SkinColor.BrownMottle}>Brown mottle</MenuItem>
            <MenuItem value={SkinColor.Dark}>Dark</MenuItem>
            <MenuItem value={SkinColor.Fair}>Fair</MenuItem>
            <MenuItem value={SkinColor.Gold}>Gold</MenuItem>
            <MenuItem value={SkinColor.Green}>Green</MenuItem>
            <MenuItem value={SkinColor.GreenTan}>Green tan</MenuItem>
            <MenuItem value={SkinColor.Grey}>Grey</MenuItem>
            <MenuItem value={SkinColor.Light}>Light</MenuItem>
            <MenuItem value={SkinColor.Metal}>Metal</MenuItem>
            <MenuItem value={SkinColor.MottledGreen}>Mottled green</MenuItem>
            <MenuItem value={SkinColor.Orange}>Orange</MenuItem>
            <MenuItem value={SkinColor.Pale}>Pale</MenuItem>
            <MenuItem value={SkinColor.Red}>Red</MenuItem>
            <MenuItem value={SkinColor.Silver}>Silver</MenuItem>
            <MenuItem value={SkinColor.Tan}>Tan</MenuItem>
            <MenuItem value={SkinColor.White}>White</MenuItem>
            <MenuItem value={SkinColor.Yellow}>Yellow</MenuItem>
            <MenuItem value={SkinColor.Unknown}>Unknown</MenuItem>
          </Select>
        </FormControl>
        <Button color="primary" variant="contained" type="submit">Submit</Button>
      </Stack>
    </form>
  );
}

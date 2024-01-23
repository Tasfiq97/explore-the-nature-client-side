/*
 * Filename: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side/src/component/primary/SignIn/SigninForm.jsx
 * Path: /home/tanzim/workstation/Personal/showcase project/Old projects/explore-the-nature-client-side
 * Created Date: Monday, January 22nd 2024, 9:17:02 pm
 * Author: Tanzim Ahmed
 *
 * Copyright (c) 2024 Tanzim Ahmed
 */

import { useState } from "react";

import LoadingButton from "@mui/lab/LoadingButton";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import { useRouter } from "../../../router/hooks";
import Iconify from "../../iconify/iconify";
import Logo from "../../logo";

import { useNavigate } from "react-router-dom";
import { bgGradient } from "../../../theme/css";
import SocialMediaLogin from "./SocialMediaLogin";

// ----------------------------------------------------------------------

export default function SignInFormView() {
  const theme = useTheme();

  const router = useRouter();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    router.push("/dashboard");
  };
  const navigate = useNavigate();

  const renderForm = (
    <>
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? "eva:eye-fill" : "eva:eye-off-fill"} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="flex-end" sx={{ my: 3 }}>
        <Link
          onClick={() => navigate("/forget-password")}
          variant="subtitle2"
          underline="hover"
          sx={{ cursor: "pointer" }}
        >
          Forgot password?
        </Link>
      </Stack>

      <LoadingButton fullWidth size="large" type="submit" variant="contained" color="inherit" onClick={handleClick}>
        Login
      </LoadingButton>
    </>
  );

  return (
    <Box
      sx={{
        ...bgGradient({
          color: alpha(theme.palette.background.default, 0.9),
          imgUrl: "/assets/background/overlay_4.jpg",
        }),
        height: 1,
      }}
    >
      <Logo
        sx={{
          position: "fixed",
          top: { xs: 16, md: 24 },
          left: { xs: 16, md: 24 },
        }}
      />

      <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
        <Card
          sx={{
            p: 5,
            width: 1,
            maxWidth: 420,
          }}
        >
          <Typography variant="cst_h4">Sign in to Explore the Nature</Typography>
          <Typography variant="body2" sx={{ mt: 2, mb: 5 }}>
            Don’t have an account?
            <Link onClick={() => navigate("/sign-up")} variant="subtitle2" sx={{ ml: 0.5, cursor: "pointer" }}>
              Get started
            </Link>
          </Typography>
          {/* <SocialMediaLogin/>
          <Divider sx={{ my: 3 }}>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              OR
            </Typography>
          </Divider> */}
          {renderForm}
        </Card>
      </Stack>
    </Box>
  );
}

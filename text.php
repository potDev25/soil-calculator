$shf = $sh * 1.3
$rhf = $rh * 2
$_2rhf = $_2rh * 3
$ntf = $nt * 1.1
$shntf = $shnt * 1.43
$rhntf = $rhnt * 2.2
$rhotf= $rhot * 2.6;
$shotf= $shot * 1.69;
$_2rhotf = $_2rhot * 3.3;
$ntotf = $ntot * 1.375;
$shntotf = $shntot * 1.859;
$rhntotf = $rhntot * 2.86;
$_2rhntotf = $_2rhntot * 4.29;
$rdf = $rd * 1.3;
$rdshf = $rdsh * 1.5;
$rdrhf = $rdrh * 2.6;
$rd2rhf = $rd2rh * 3.9;
$rdshntf = $rdshnt * 1.65;
$rdrhntf = $rdrhnt * 2.86;
$rdshotf = $rdshot * 1.95;
$rdrhotf = $rdrhot * 3.38;
$rd2rhotf = $rd2rhot * 5.07;
$rdntotf = $rdntot * 1.859;
$rdrhntotf = $rdrhntot * 3.718;
$rdshntotf = $rdshntot * 2.145;
$rd2rhntotf = $rd2rhntot * 5.577;
$rdotf = $rdot * 1.86;
$rdntf = $rdnt * 1.43;
$regothr= $rthr * 1.25;

ROUND(coalesce(d.rh, 0) * 2, 2) AS rhf,
ROUND(coalesce(d.sh, 0) * 1.3, 2) AS shf,
ROUND(coalesce(d.sh_nt, 0) * 1.43, 2) AS sh_ntf

ROUND(pc.rh * pc.hourly_rate, 2) AS rh_mult_hrly,
Round(pc.sh * pc.hourly_rate, 2) AS sh_mult_hrly,
Round(pc.sh_nt * pc.hourly_rate, 2) AS sh_nt_mult_hrly,
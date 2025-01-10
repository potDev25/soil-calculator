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

Round(ROUND(pc.rh * pc.hourly_rate, 2) * 2, 2) AS rh_mult_point_hrly,
Round(Round(pc.sh * pc.hourly_rate, 2) * 1.3) AS sh_mult_point_hrly,
Round(Round(pc.sh_nt * pc.hourly_rate, 2) * 1.43) AS sh_nt_mult_point_hrly,

sum(LEAST(COALESCE(
COALESCE(d.sh_ot, 0) + 
COALESCE(d.rh_ot, 0) + 
    COALESCE(d._2_rh_ot, 0) + 
    COALESCE(d.nt_ot, 0) + 
    COALESCE(d.sh_nt_ot, 0) + 
    COALESCE(d.rh_nt_ot, 0) + 
    COALESCE(d._2_rh_nt_ot, 0) + 
    COALESCE(d.rd, 0) + 
    COALESCE(d.rd_sh, 0) +
    COALESCE(d.rd_nt, 0) + 
    COALESCE(d.rd_2_rh, 0) + 
    COALESCE(d.rd_2_rh_nt, 0) + 
COALESCE(d.rd_sh_nt, 0) + 
    COALESCE(d.rd_sh_ot, 0) + 
    COALESCE(d.rd_2_rh_ot, 0) + 
    COALESCE(d.rd_nt_ot, 0) + 
    COALESCE(d.rd_sh_nt_ot, 0) + 
    COALESCE(d.rd_rh_nt_ot, 0) + 
    COALESCE(d.rd_rh_nt, 0) + 
    COALESCE(d.rd_rh, 0) +
    COALESCE(d.rd_2_rh_nt_ot, 0) +
    COALESCE(d.rd_ot, 0) +
    COALESCE(d.rd_rh_ot, 0) 


sum(d.sh_ot) as sh_ot_result,
sum(d.rh_ot) as rh_ot_result,
sum(d._2_rh_ot) as _2_rh_ot_result,
sum(d.nt_ot) as nt_ot_result,
sum(d.sh_nt_ot) as sh_nt_ot_result,
sum(d.rh_nt_ot) as rh_nt_ot_result,
sum(d._2_rh_nt_ot) as _2_rh_nt_ot_result,
sum(d.rd) as rd_result,
sum(d.rd_sh) as rd_sh_result,
sum(d.rd_nt) as rd_nt_result,
sum(d.rd_2_rh) as rd_2_rh_result,
sum(d.rd_2_rh_nt) as rd_2_rh_nt_result,
sum(d.rd_sh_nt) as rd_sh_nt_result,
sum(d.rd_sh_ot) as rd_sh_ot_result,
sum(d.rd_2_rh_ot) as rd_2_rh_ot_result,
sum(d.rd_nt_ot) as rd_nt_ot_result,
sum(d.rd_sh_nt_ot) as rd_sh_nt_ot_result,
sum(d.rd_rh_nt_ot) as rd_rh_nt_ot_result,
sum(d.rd_rh_nt) as rd_rh_nt_result,
sum(d.rd_rh) as rd_rh_result,
sum(d.rd_2_rh_nt_ot) as rd_2_rh_nt_ot_result,
sum(d.rd_ot) as rd_ot_result,
sum(d.rd_rh_ot) as rd_rh_ot_result,

    pc.sh_ot_result +
    pc.rh_ot_result +
    pc._2_rh_ot_result +
    pc.nt_ot_result +
    pc.sh_nt_ot_result +
    pc.rh_nt_ot_result +
    pc._2_rh_nt_ot_result +
    pc.rd_result +
    pc.rd_sh_result +
    pc.rd_nt_result +
    pc.rd_2_rh_result +
    pc.rd_2_rh_nt_result +
    pc.rd_sh_nt_result +
    pc.rd_sh_ot_result +
    pc.rd_2_rh_ot_result +
    pc.rd_nt_ot_result +
    pc.rd_sh_nt_ot_result +
    pc.rd_rh_nt_ot_result +
    pc.rd_rh_nt_result +
    pc.rd_rh_result +
    pc.rd_2_rh_nt_ot_result +
    pc.rd_ot_result +
    pc.rd_rh_ot_result

    Round(pc.sh_ot_result * pc.hourly_rate, 2) as sh_ot_result,
	Round(pc.rh_ot_result * pc.hourly_rate, 2) as rh_ot_result,
	Round(pc._2_rh_ot_result * pc.hourly_rate, 2) as _2_rh_ot_result,
	Round(pc.nt_ot_result * pc.hourly_rate, 2) as nt_ot_result,
	Round(pc.sh_nt_ot_result * pc.hourly_rate, 2) as sh_nt_ot_result,
	Round(pc.rh_nt_ot_result * pc.hourly_rate, 2) as rh_nt_ot_result,
	Round(pc._2_rh_nt_ot_result * pc.hourly_rate, 2) as _2_rh_nt_ot_result,
	Round(pc.rd_result * pc.hourly_rate, 2) as rd_result,
	Round(pc.rd_sh_result * pc.hourly_rate, 2) as rd_sh_result,
	Round(pc.rd_nt_result * pc.hourly_rate, 2) as rd_nt_result,
	Round(pc.rd_2_rh_result * pc.hourly_rate, 2) as rd_2_rh_result,
	Round(pc.rd_2_rh_nt_result * pc.hourly_rate, 2) as rd_2_rh_nt_result,
	Round(pc.rd_sh_nt_result * pc.hourly_rate, 2) as rd_sh_nt_result,
	Round(pc.rd_sh_ot_result * pc.hourly_rate, 2) as rd_sh_ot_result,
	Round(pc.rd_2_rh_ot_result * pc.hourly_rate, 2) as rd_2_rh_ot_result,
	Round(pc.rd_nt_ot_result * pc.hourly_rate, 2) as rd_nt_ot_result,
	Round(pc.rd_sh_nt_ot_result * pc.hourly_rate, 2) as rd_sh_nt_ot_result,
	Round(pc.rd_rh_nt_ot_result * pc.hourly_rate, 2) as rd_rh_nt_ot_result,
	Round(pc.rd_rh_nt_result * pc.hourly_rate, 2) as rd_rh_nt_result,
	Round(pc.rd_rh_result * pc.hourly_rate, 2) as rd_rh_result,
	Round(pc.rd_2_rh_nt_ot_result * pc.hourly_rate, 2) as rd_2_rh_nt_ot_result,
	Round(pc.rd_ot_result * pc.hourly_rate, 2) as rd_ot_result,
	Round(pc.rd_rh_ot_result * pc.hourly_rate, 2) as rd_rh_ot_result,

    ABS(ROUND(COALESCE((pc.under_time + late) * pc.hourly_rate * -1, 0), 2)) AS productivity_deductions,
	ROUND(COALESCE(pc.off_days * pc.hourly_rate, 0), 2) AS off_work_deductions,

    final_sub_table AS (
    SELECT pc.payroll_id, 
	pc.cost_code,
	pc.employee_id, pc.employee_name, 
	pc.department, 
	pc.employee_type, 
	pc.employee_status,
    pc.site_id
	pc.site,  
	pc.monthly AS monthly_rate, 
	pc.semi_monthly, 
	pc.daily_rate, pc.hourly_rate, 
	pc.days AS days_worked, pc.total_hours, 
	Round(pc.total_night_hours, 2) as total_night_hours,
	pc.off_days AS day_off_work, pc.under_time, 
	pc.late,  
	pc.productivity_deductions,
	pc.off_work_deductions, 
	pc.pano * pc.hourly_rate AS pano, coalesce(r.rockstar, 0) AS rockstar, 
	-- government deductions
	pc.philhealth_deduction / 2 AS philhealth_deduction,
	pc.philhealth_deduction / 2 AS philhealth_deduction_employeer,
	COALESCE(@hdmf, 0.00) AS hdmf_employee,
	COALESCE(@hdmf, 0.00) AS hdmf_employeer,
	-- end of government deductions
	IFNULL(bd.client_bonus, 0.00) AS client_bonus, IFNULL(bd.performanceBonus, 0.00) AS performanceBonus,
	pc.holiday_hours,
	-- ROUND(COALESCE(pc.rhf, 0) + COALESCE(pc.shf, 0) + COALESCE(pc.sh_ntf, 0)) AS holiday_pay,
	pc.ot_hours, pc.night_differential,
	IFNULL(pc.rice_allowance, 0.00) AS rice_allowance, ifnull(uniform, 0.00) AS clothing_allowance, ifnull(laundry_allowance, 0.00) AS laundry_allowance, 
	ifnull(tenure_allowance, 0.00) AS tenure_allowance,
	ifnull(discount, 0.00) AS resto_discount,
	ROUND(
		off_days / (days + off_days)
	, 2) AS monthly_show_rate, COALESCE(attendance_bonus * ROUND(
		off_days / (days + off_days)
	, 2), 0.00) AS attendance_bonus,
	pc.rh,
   pc.sh,
   pc.sh_nt,
   hc.sh_result + hc.rh_result + hc.sh_nt_result AS holiday_pay,
   COALESCE(
	 pc.sh_ot_result +
    pc.rh_ot_result +
    pc._2_rh_ot_result +
    pc.nt_ot_result +
    pc.sh_nt_ot_result +
    pc.rh_nt_ot_result +
    pc._2_rh_nt_ot_result +
    pc.rd_result +
    pc.rd_sh_result +
    pc.rd_nt_result +
    pc.rd_2_rh_result +
    pc.rd_2_rh_nt_result +
    pc.rd_sh_nt_result +
    pc.rd_sh_ot_result +
    pc.rd_2_rh_ot_result +
    pc.rd_nt_ot_result +
    pc.rd_sh_nt_ot_result +
    pc.rd_rh_nt_ot_result +
    pc.rd_rh_nt_result +
    pc.rd_rh_result +
    pc.rd_2_rh_nt_ot_result +
    pc.rd_ot_result +
    pc.rd_rh_ot_result
	, 0.00) AS ot_pay,
	coalesce(wpd.amount, 0.00) AS adjustment_amount,
	coalesce(wpd.type, '') AS adjustment_type,
	coalesce(wpd.taxable, 0) AS taxable, coalesce(sum(wpd.type_add), 0.00) AS adjustment_to_add, coalesce(sum(wpd.type_deduc), 0.00) AS adjustment_to_deduc,
	COALESCE(coalesce(sum(wpd.type_add), 0) - coalesce(sum(wpd.type_deduc), 0), 0.00) AS adjustment,
	pc.cut_off,
	hc.deducted_semi_monthly
	FROM summary pc
	LEFT JOIN rockstar r ON pc.employee_id = r.Customer_ID
	LEFT JOIN bonus_data bd ON pc.employee_id = bd.empId
	LEFT JOIN with_payroll_addjustment wpd ON pc.employee_id = wpd.emp_id
	JOIN holiday_computation hc ON pc.employee_id = hc.employee_id
	GROUP BY pc.employee_id)

    COALESCE(d.sh_ot, 0) as shot,
	COALESCE(d.rh_ot, 0) as rhot,
	COALESCE(d._2_rh_ot, 0),
	COALESCE(d.nt_ot, 0) as ntot,
	COALESCE(d.sh_nt_ot, 0) as shntot,
 	COALESCE(d.rh_nt_ot, 0) as rhntot,
    COALESCE(d._2_rh_nt_ot, 0) as _2rhntot,
    COALESCE(d.rd, 0) as rd,
    COALESCE(d.rd_sh, 0) as rdsh,
    COALESCE(d.rd_nt, 0) as rdnt,
    COALESCE(d.rd_2_rh, 0) as rd2rh,
    COALESCE(d.rd_2_rh_nt, 0),
    COALESCE(d.rd_sh_nt, 0) as rdshnt,
    COALESCE(d.rd_sh_ot, 0) as rdshot,
    COALESCE(d.rd_2_rh_ot, 0) as rd2rhot,
    COALESCE(d.rd_nt_ot, 0) as rdntot,
    COALESCE(d.rd_sh_nt_ot, 0) as rdshntot,
    COALESCE(d.rd_rh_nt_ot, 0) as rdrhntot,
    COALESCE(d.rd_rh_nt, 0) as rdrhnt,
    COALESCE(d.rd_rh, 0) as rdrh,
    COALESCE(d.rd_2_rh_nt_ot, 0) as rd2rhntot,
    COALESCE(d.rd_ot, 0) as rdot,
    COALESCE(d.rd_rh_ot, 0) as rdrhot,
    COALESCE(reg_ot, 0) as reg_ot,

    COALESCE(d.nt_ot, 0) as ntot,
    COALESCE(d.sh_nt_ot, 0) as shntot,
    COALESCE(d.rh_nt_ot, 0) as rhntot,
    COALESCE(d._2_rh_nt_ot, 0) as _2rhntot,
    COALESCE(d.rd, 0) as rd,
    COALESCE(d.rd_sh, 0) as rdsh,
    COALESCE(d.rd_rh, 0) as rdrh,
    COALESCE(d.rd_2_rh, 0) as rd2rh,
    COALESCE(d.rd_sh_nt, 0) as rdshnt,
    COALESCE(d.rd_rh_nt, 0) as rdrhnt,
    COALESCE(d.rd_sh_ot, 0) as rdshot,
    COALESCE(d.rd_rh_ot, 0) as rdrhot,
    COALESCE(d.rd_2_rh_ot, 0) as rd2rhot,
    COALESCE(d.rd_nt_ot, 0) as rdntot,
    COALESCE(d.rd_rh_nt_ot, 0) as rdrhntot,
    COALESCE(d.rd_sh_nt_ot, 0) as rdshntot,
    COALESCE(d.rd_2_rh_nt_ot, 0) as rd2rhntot,
    COALESCE(d.rd_ot, 0) as rdot,
    COALESCE(d.rd_nt, 0) as rdnt,
    COALESCE(d.sh_ot, 0) as shot,
    COALESCE(d.rh_ot, 0) as rhot,
    COALESCE(reg_ot, 0) as reg_ot

    COALESCE(pc.sh_ot, 0) as sh_ot,
	COALESCE(pc.rh_ot, 0) as sh_ot,
	COALESCE(pc._2_rh_ot, 0) as sh_ot,
	COALESCE(pc.nt_ot, 0) as sh_ot,
	COALESCE(pc.sh_nt_ot, 0) as sh_ot,
	COALESCE(pc.rh_nt_ot, 0) as sh_ot,
	COALESCE(pc._2_rh_nt_ot, 0) as sh_ot,
	COALESCE(pc.rd, 0) as sh_ot,
	COALESCE(pc.rd_sh, 0) as sh_ot,
	COALESCE(pc.rd_nt, 0) as sh_ot,
	COALESCE(pc.rd_2_rh, 0),
	COALESCE(pc.rd_2_rh_nt, 0) as sh_ot,
	COALESCE(pc.rd_sh_nt, 0) as sh_ot,
	COALESCE(pc.rd_sh_ot, 0) as sh_ot,
	COALESCE(pc.rd_2_rh_ot, 0) as sh_ot,
	COALESCE(pc.rd_nt_ot, 0) as sh_ot,
	COALESCE(pc.rd_sh_nt_ot, 0) as sh_ot,
	COALESCE(pc.rd_rh_nt_ot, 0) as sh_ot,
	COALESCE(pc.rd_rh_nt, 0) as sh_ot,
	COALESCE(pc.rd_rh, 0) as sh_ot,
	COALESCE(pc.rd_2_rh_nt_ot, 0) as sh_ot,
	COALESCE(pc.rd_ot, 0) as sh_ot,
	COALESCE(pc.rd_rh_ot, 0) as sh_ot


    hc.sh_result + hc.rh_result + hc.sh_nt_result AS holiday_pay,
   COALESCE(
	 pc.sh_ot_result +
    pc.rh_ot_result +
    pc._2_rh_ot_result +
    pc.nt_ot_result +
    pc.sh_nt_ot_result +
    pc.rh_nt_ot_result +
    pc._2_rh_nt_ot_result +
    pc.rd_result +
    pc.rd_sh_result +
    pc.rd_nt_result +
    pc.rd_2_rh_result +
    pc.rd_2_rh_nt_result +
    pc.rd_sh_nt_result +
    pc.rd_sh_ot_result +
    pc.rd_2_rh_ot_result +
    pc.rd_nt_ot_result +
    pc.rd_sh_nt_ot_result +
    pc.rd_rh_nt_ot_result +
    pc.rd_rh_nt_result +
    pc.rd_rh_result +
    pc.rd_2_rh_nt_ot_result +
    pc.rd_ot_result +
    pc.rd_rh_ot_result



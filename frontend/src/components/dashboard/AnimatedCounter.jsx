export default function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
}) {
  return (
    <span>
      {prefix}
      {end}
      {suffix}
    </span>
  );
}